function Content_grid_item({ data }) {
    return (
        <a href={data.url} className="content_grid_item" target="_blank" rel="noopener noreferrer">
            <img 
                src={data.img_url}
                alt={data.title}
            />
            <div className='grid_item_text'>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
            </div>
        </a>
    );
}

export default Content_grid_item;
