'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const Speaker = () => {

  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/speaker");
    const data = await response.json();

    setAllPosts(data);


  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(allPosts)

  let generateTabel = () => {
    return allPosts.map((item) => (
      <tr key={item.id}>
        <td>{item.company}</td>
        <td>{item.name}</td>
        <td>{item.country}</td>
        <td><Link href={'speaker/'+item.id.toString()}>Show</Link></td>
      </tr>
    ))

  }

  return (
    <section>
      <h1>SPEAKERS LIST</h1>
      <table>
        <thead>
          <tr className='topic'>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Speaker Page</th>
          </tr>
        </thead>
        <tbody>
          {generateTabel()}
        </tbody>
      </table>
    </section>
  )
}

export default Speaker