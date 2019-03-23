import React from 'react';

interface ISearchBoxProps {
	searchfield(event: React.SyntheticEvent<HTMLInputElement>): void
	searchChange(event: React.SyntheticEvent<HTMLInputElement>): void 
}

const SearchBox = ({ searchfield, searchChange }: ISearchBoxProps) => {
	return (
		<div>
			<input 
			aria-label='Search Robots'
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots' 
			onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox