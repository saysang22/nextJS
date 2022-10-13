import Head from "next/head";
import { useEffect, useState } from "react";
import Axios from 'axios';
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData(){
    Axios.get(API_URL)
    .then((result) => {
      console.log(result.data);
      setList(result.data);
    })
  }


  useEffect(() => {
    getData();
  },[]);

  return (
    <div>
      <Head>
        <title>nextJS연습</title>
      </Head>
      <Header as='h3'>베스트 상품</Header>
      <Divider/>
      <ItemList list={list}/>
    </div>
    )
}
