const MultiSection = ({sections}) => {

	return (
		<>
			{
				sections.length ? sections.map((section, i) => {
					const Section = section.component
					return <Section value={section.value} key={`${section.alias}-${i}`} />
				}) : ''
			}
		</>
	)
}

export default MultiSection
