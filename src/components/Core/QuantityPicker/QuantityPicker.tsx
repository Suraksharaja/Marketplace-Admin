import * as React from 'react';

interface QuantityPickerProps {
	quantity: any;
	onIncrement?: any;
	onDecrement?: any;
	onRemoveItem?: any;
	className?: any;
}
interface QuantityPickerState {
	quantity: number;
}

class QuantityPicker extends React.Component<QuantityPickerProps, QuantityPickerState> {

	constructor(props: QuantityPickerProps) {
		super(props);
		this.state = {
			quantity: Number(props.quantity) || 0
		};
	}

	onIncrement() {
		this.setState({
			quantity: Number(this.state.quantity) + 1
		});

		if (this.props.onIncrement && typeof this.props.onIncrement === 'function') {
			this.props.onIncrement(this.state.quantity);
		}
	}

	onDecrement() {
		let newQuantity = Number(this.state.quantity) - 1;
		if (newQuantity < 0) {
			newQuantity = 0;
		}
		this.setState({
			quantity: newQuantity
		});
		if (this.props.onDecrement && typeof this.props.onDecrement === 'function') {
			this.props.onDecrement(this.state.quantity);
		}
	}

	onQuantityChange(e: any) {
		let newQuantity = e.target.value;
		if (newQuantity < 0) {
			newQuantity = 0;
		}
		this.setState({
			quantity: newQuantity
		});
		this.props.onIncrement(this.state.quantity);
	}

	addItem() {
		this.setState({
			quantity: (this.state.quantity + Number(1))
		});
		this.props.onIncrement(this.state.quantity);
	}

	removeItem () {
		this.setState({
			quantity: 0
		});
		this.props.onRemoveItem(this.state.quantity);
	}

	render() {
		const classNames = `${this.props.className} dib`;
		if (this.state.quantity === 0) {
			return (
				<img
					src="/rounded-add-button.svg"
					alt="add-to-cart"
					onClick={this.addItem.bind(this)}
					className="w-10 fr"
				/>
			);
		}
		return (
			<div className={classNames} >
				<div className="flex b--theme">
					<div className="w2 tc bb bl bt b--theme theme-color" onClick={this.onDecrement.bind(this)}>-</div>
					<div className="w2">
						<input 
							type="text" 
							className="w-100 tc ba b--theme" 
							onChange={this.onQuantityChange.bind(this)} 
							value={this.state.quantity.toString()} 
						/>
					</div>
					<div className="w2 tc bt br bb b--theme theme-color" onClick={this.onIncrement.bind(this)}>+</div>
				</div>
			</div>
		);
	}
}

export default QuantityPicker;
