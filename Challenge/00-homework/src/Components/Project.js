function ProjectApp({title, description, link, text, imageLink,}) {
    return (
        <div>
            <div className="card" style={{ width: 18 + "rem" }}>
                <img src={ imageLink } className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <a href={ link } className="btn btn-primary">{ text }</a>
                </div>
            </div>
        </div>


    )
}
export default ProjectApp;