const PageContent = ({ src, alt, title, content }) => {
    return (
        <>
            <header>
                <figure>
                    <img src={src} alt={alt} loading='lazy' width='160' height="160" />
                </figure>
                <h1 className='title' dangerouslySetInnerHTML={{ __html: title }} />
            </header>

            <main className='description' dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export default PageContent;
