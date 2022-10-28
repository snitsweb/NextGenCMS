import {useEffect, useState} from 'react'

const MultiSection = ({sectionsAliases}) => {

	const [sections, setSections] = useState([])

	useEffect(() => {
		setSections(
			sectionsAliases ?
				sectionsAliases.map(sectionAlias => {
					return window.app.getSection(sectionAlias)
				})
				: []
		)
	}, [sectionsAliases])

	return (
		<>
			{
				sections.length ? sections.map((Section, i) => {
					return <Section key={sections[i]} />
				}) : ''
			}
		</>
	)
}

export default MultiSection
