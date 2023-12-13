import { Button } from '@mui/material'
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add'

function EditToolbar(props) {
	const { setRows, setRowModesModel } = props

	const handleClick = () => {
		const id = Math.floor(Math.random() * 1000)
		setRows((oldRows) => [...oldRows, { id, name: '', value: '', isNew: true }])
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}))
	}

	return (
		<GridToolbarContainer>
			<Button
				color='primary'
				startIcon={<AddIcon />}
				onClick={handleClick}
			>
				Add record
			</Button>
		</GridToolbarContainer>
	)
}

export default EditToolbar
