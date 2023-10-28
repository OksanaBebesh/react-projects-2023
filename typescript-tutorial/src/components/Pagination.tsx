interface Props {
    // activePage: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    // pagesMaxCount: number,
}

const Pagination:React.FC<Props> = ({setPage}) => {
    return (<>
            <div className="pagination-block">
                <div onClick={()=>setPage(1)}>1</div>
                <div onClick={()=>setPage(2)}>2</div>
                <div onClick={()=>setPage(3)}>3</div>
                <div onClick={()=>setPage(4)}>4</div>
                <div onClick={()=>setPage(5)}>5</div>
            </div>
    </>);
}

export default Pagination;