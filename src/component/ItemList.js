import { Grid, Image } from 'semantic-ui-react';
import style from './ItemList.module.css';

export default function ItemList({ list }){
    return (
        <Grid columns={3} divided>
            <Grid.Row>
            {list.map((result) => {
                return <>
                    <Grid.Column>
                        <Image src={result.image_link} alt = {result.name} />
                        <p>{result.name}</p>
                        <p>{result.category}</p>
                        <p>${result.price}</p>
                    </Grid.Column>
                </>
            })}
        </Grid.Row>
    </Grid>
    )
}