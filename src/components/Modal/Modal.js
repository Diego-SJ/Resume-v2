import React from 'react';

import './Modal.scss';

export default function Modal(props) {
	const { content, isOpen, closeModal, Modal } = props;

	return (
		<>
			{isOpen && (
				<Modal className='modal'>
					<div className='modal__close'>
						<button onClick={closeModal} className='modal__btn'>
							&times;
						</button>
					</div>
					{content}
				</Modal>
			)}
		</>
	);
}
