import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
	status: string
	updateStatus: (status: string) => void
	// isOwner: boolean
}

const ProfileStatusWithHooks = (props: PropsType) => {

	let [editMode, setEditMode] = useState<boolean>(false)
	let [status, setStatus] = useState<string>(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}
	return (
		<div>
			{editMode
				? <input value={status}
						 type="text"
						 onChange={onStatusChange}
						 autoFocus={true}
						 onBlur={deactivateEditMode}
				/>
				: <span className={s.statusBlock}
						onDoubleClick={activateEditMode}>{props.status || '------'} </span>
			}
		</div>
	)
}


export default ProfileStatusWithHooks;


