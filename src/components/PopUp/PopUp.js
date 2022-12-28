import React, { useState } from "react";
import "./PopUp.scss";

function Popup(props) {
	return props.trigger ? (
		<div className="popup">
			<div className="popup__inner">
				<button
					className="popup__close-btn"
					onClick={() => props.setTrigger(false)}
				>
					close
				</button>
				{props.children}
			</div>
		</div>
	) : (
		""
	);
}

export default Popup;
