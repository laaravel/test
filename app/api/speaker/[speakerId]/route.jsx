let speakers = [
    {id: 1, name: 'John Smith', company: 'Apple',  country: 'USA', schedule: 'ios', lecture: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore, dignissimos nam rem saepe sint, odio magni neque ut consectetur provident laudantium facilis veritatis asperiores exercitationem nemo sequi eum ducimus.', profile: 'image 1', startTime: '08:00', endTime: '10:00'},
    {id: 2, name: 'Francisco Chang', company: 'Centro comercial Moctezuma',  country: 'Mexico', schedule: 'React js', lecture: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus suscipit pariatur explicabo neque ut excepturi consectetur odio, minus consequatur rerum accusamus? Asperiores nisi laboriosam fugiat, temporibus velit iure ipsam inventore!.', profile: 'image 2', startTime: '10:00', endTime: '12:00'},
    {id: 3, name: 'Roland Mendel', company: 'Ernst Handel',  country: 'Austria', schedule: 'Next js', lecture: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quis! Nemo quasi animi dolores suscipit aspernatur, error quae vero consequatur amet soluta molestiae explicabo minima eligendi corrupti, velit, saepe tempora.', profile: 'image 3', startTime: '12:00', endTime: '13:00'},
    {id: 4, name: 'Helen Bennett', company: 'Island Trading',  country: 'UK', schedule: 'java script', lecture: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore, dignissimos nam rem saepe sint, odio magni neque ut consectetur provident laudantium facilis veritatis asperiores exercitationem nemo sequi eum ducimus.', profile: 'image 4', startTime: '14:00', endTime: '16:00'},
    {id: 5, name: 'Yoshi Tannamuri', company: 'Laughing Bacchus Winecellars',  country: 'Canada', schedule: 'redux', lecture: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam culpa laboriosam assumenda hic aut tempore, veritatis repudiandae odio dolor fuga nobis praesentium natus enim, rerum nam architecto officia quae!', profile: 'image 5', startTime: '16:00', endTime: '19:00'},
    {id: 6, name: 'Giovanni Rovelli', company: 'Magazzini Alimentari Riuniti',  country: 'Italy', schedule: 'php', lecture: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi perspiciatis recusandae expedita exercitationem, possimus totam dolores nulla ad sit accusantium iure consequatur porro et facere? Obcaecati excepturi ea atque?', profile: 'image 6', startTime: '19:00', endTime: '20:00'},
  ]
  
export async function GET(request, { params }) {

    let paramsID = params.speakerId;
    let reqObj = speakers.find((item) => {
        return item.id == paramsID
    })  

    console.log('object: => ', reqObj)

    return Response.json(reqObj);
};
