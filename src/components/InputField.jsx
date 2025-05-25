export const InputField = ({ type, id, placeholder,required }) => {
	return (
		<div className="mb-4">
			<input
				type={type}
				id={id}
        placeholder={placeholder}
				className="w-full px-4 py-2 placeholder-gray-400 font-light bg-gray-200 rounded-lg outline-none"
				required={required}
			/>
		</div>
	);
};
