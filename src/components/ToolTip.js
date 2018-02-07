import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	border-radius: 4px;
	overflow: hidden;
	font-weight: 500;
	font-size: 14px;
	white-space: nowrap;
	text-overflow: ellipsis;
	height: 32px;
	line-height: 32px;
	padding-right: 16px;
	padding-left: 16px;
	position: fixed;
	margin-right: 20px;
	bottom: 110px;
	right: 33px;
	color: rgba(255,255,255,0.87);
	background-color: rgb(97,97,97);
	transition: all .4s cubic-bezier(.25,.8,.25,1);
	transition-duration: .2s;
	transform: scale(1);
	opacity: 0.9;
`

const ToolTip = (props) => (
	<StyledDiv style={props.visible ? {opacity:0.9} : {opacity:0}}>Rest All</StyledDiv>
)
export default ToolTip;
