import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
	status: string
	updateStatus: (text: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{ editMode: boolean, status: string }>) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div>
				{
					this.state.editMode
						? <input
							value={this.state.status}
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deactivateEditMode}
						/>
						: <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
				}
			</div>
		)
	}

}

export default ProfileStatus;
