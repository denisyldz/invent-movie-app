import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-material.css"
import { useEffect, useMemo, useRef, useState } from 'react';
import SearchBox from '../components/SearchBox';
import MovieSeriesTab from '../components/MovieSeriesTab';
import RadioButtonGroup from '../components/RadioButtonGroup';
import CustomLoadingCellRenderer from "../components/LoadingCellRenderer";
import { getByTitle, getMoviesAndSeries } from '../services/getAllMoviesAndSeries';
import { debounce } from 'lodash';

const Home = () => {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('movie');
  const [searchText, setSearchText] = useState('Pokemon');
  const [singleRowData, setSingleRowData] = useState(null);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Title", filter: false, floatingFilter: false },
    { field: "Year", filter: true, floatingFilter: true },
    { field: "imdbID", filter: false, floatingFilter: false },
    { field: "Type", filter: true, floatingFilter: true }
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      sortable: true,
      filterOptions: true,
      lockPosition: true,
      resizable: true,
      rowSelection: 'single',
      suppressHeaderMenuButton: true,
    }
  });

  const goPreviousPage = () => {
    window.location.href = '/';
    setSingleRowData({});
  };

  useEffect(() => {
    const fetchData = debounce(async () => {
      setLoading(true);
      const data = await getMoviesAndSeries(searchText, searchType);
      if (data) {
        setRowData(data);
      }
      setLoading(false);
    }, 200);

    fetchData();

    return () => {
      fetchData.cancel();
    };
  }, [searchText, searchType]);

  const handleRowClick = async (e) => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getByTitle(e.data.Title);
      if (data) {
        setSingleRowData(data);
      }
      setLoading(false);
    };
    fetchData();
  };

  return (
    <div className='ag-theme-material-dark' style={{ height: "85vh" }}>

      {!singleRowData ? <>
        <div className='flex'>
          <SearchBox setSearchText={setSearchText} searchText={searchText} />
          <RadioButtonGroup setSearchType={setSearchType} />
        </div>
        {loading ? <CustomLoadingCellRenderer loadingMessage='Loading...' />
          :
          <AgGridReact
            onRowClicked={handleRowClick}
            ref={gridRef}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20]}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        }
      </> :
        <MovieSeriesTab goPreviousPage={goPreviousPage} data={singleRowData} />
      }
    </div>
  );
}

export default Home;
