
const Bookmark = ({ bookmark }) => {
    const { reading_time, title } = bookmark;
    return (
        <div>
            <h3 className="font-bold bg-white rounded p-2" title={`${reading_time} time read`}>{title}</h3>
        </div>
    );
};

export default Bookmark;