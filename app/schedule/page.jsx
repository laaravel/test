import React from 'react'

const Schedule = () => {
  return (
    <section>
          <h1>TIME TABLE</h1>
    <table>
        <tr>
            <th>Day/Period</th>
            <th>I<br />08:00-10:00</th>
            <th>II<br />10:00-12:00</th>
            <th>III<br />12:00-13:00</th>
            <th>13:00-14:00</th>
            <th>IV<br />14:00-16:00</th>
            <th>V<br />16:00-19:00</th>
            <th>VI<br />19:20-20:10</th>
        </tr>
        <tr>
            <td class="highlight"><b>Monday</b></td>
            <td>John Smith</td>
            <td>Francisco Chang</td>
            <td></td>
            <td rowspan="6" class="special"><b>LUNCH</b></td>
            <td>Roland Mendel</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="highlight"><b>Tuesday</b></td>
            <td>Helen Bennett</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="highlight"><b>Wednesday</b></td>
            <td></td>
            <td>Yoshi Tannamuri</td>
            <td>Giovanni Rovelli</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="highlight"><b>Thursday</b></td>
            <td></td>
            <td>John Smith</td>
            <td></td>
            <td>Helen Bennett</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="highlight"><b>Friday</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td class="highlight"><b>Saturday</b></td>
            <td>Francisco Chang</td>
            <td></td>
            <td></td>
            <td>Yoshi Tannamuri</td>
            <td></td>
            <td>Roland Mendel</td>
        </tr>
    </table>
    </section>
  )
}

export default Schedule