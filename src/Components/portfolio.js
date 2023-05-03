
import ProjectApp from "./Project";
import FooterApp from "./Footer";
const projectArray = [
    {
        title: 'Tic-Tac-Toe',
        description: 'des',
        link: 'link',
        text: 't',
        imageLink: '<img src="pic_trulli.jpg" alt="Italian Trulli">',
    },
    {
        title: 'title',
        description: 'des',
        link: 'link',
        text: 't',
        imageLink: 'https://placehold.co/10',
    },
    {
        title: 'title',
        description: 'des',
        link: 'link',
        text: 't',
        imageLink: 'https://placehold.co/10',
    },
    {
        title: 'title',
        description: 'des',
        link: 'link',
        text: 't',
        imageLink: 'https://placehold.co/10',
    },
]

function PortfolioApp() {
    console.log(projectArray, "here is projectArray")
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {projectArray.length ? (projectArray.map((data, key) => (<ProjectApp {...data} key={key} ></ProjectApp>)

                )) : (<div>error not found</div>)}
            </div>
            <FooterApp></FooterApp>

        </div>
    );
}
export default PortfolioApp;