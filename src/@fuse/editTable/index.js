import MaterialTable from 'material-table';
import { tableIcons } from './tableIcons';

const Editable = ({ columns, title, data, editable, options }) => {
  return (
    <MaterialTable
      icons={tableIcons}
      title={title}
      options={options}
      columns={columns}
      data={data}
      editable={editable}
    />
  );
};

export default Editable;
