import Card from "./Card";

function MyCard(){
    return (
        <Card>
            <Card.Header>
                <h2>Header Part</h2>
            </Card.Header>
            <Card.Body>
                <p>This is Body Content</p>
            </Card.Body>
            <Card.Footer>
                <button>Action</button>
            </Card.Footer>
        </Card>
    )
}

export default MyCard;
