import React from 'react'
import styled from '@emotion/styled'

import Page from '~/templates/Page'
import { TwoColumnGrid } from '~/utils/styles'

const Table = styled.table`
  border-collapse: collapse;
  border-color: #ccc;
  border-spacing: 0;

  tr th,
  tr td {
    padding: 20px;
  }
`

const TableHead = styled.thead`
  background-color: #f0f0f0;
  border-color: #ccc;
  border-style: solid;
  border-width: 0px;
  color: #333;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
  border-color: inherit;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
`

const TableBody = styled.tbody`
  border-color: inherit;
  text-align: center;
  vertical-align: top;
`

const Groessentabelle = () => (
  <Page title="Größentabelle">
    <TwoColumnGrid>
      <div>
        <h2>Frauenschnitt</h2>
        <Table>
          <TableHead>
            <tr>
              <th>Größe</th>
              <th>Breite</th>
              <th>Höhe</th>
              <th>Ärmel</th>
            </tr>
          </TableHead>
          <TableBody>
            <tr>
              <td>XS</td>
              <td>42</td>
              <td>62</td>
              <td>15</td>
            </tr>
            <tr>
              <td>S</td>
              <td>45</td>
              <td>64</td>
              <td>15</td>
            </tr>
            <tr>
              <td>M</td>
              <td>48</td>
              <td>66</td>
              <td>16</td>
            </tr>
            <tr>
              <td>L</td>
              <td>51</td>
              <td>68</td>
              <td>16</td>
            </tr>
          </TableBody>
        </Table>
      </div>
      <div>
        <h2>Unisex</h2>
        <Table>
          <TableHead>
            <tr>
              <th>Größe</th>
              <th>Breite</th>
              <th>Höhe</th>
              <th>Ärmel</th>
            </tr>
          </TableHead>
          <TableBody>
            <tr>
              <td>XS</td>
              <td>47</td>
              <td>66</td>
              <td>19</td>
            </tr>
            <tr>
              <td>S</td>
              <td>50</td>
              <td>69</td>
              <td>20</td>
            </tr>
            <tr>
              <td>M</td>
              <td>53</td>
              <td>72</td>
              <td>21</td>
            </tr>
            <tr>
              <td>L</td>
              <td>56</td>
              <td>74</td>
              <td>22</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>59</td>
              <td>76</td>
              <td>22</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>62</td>
              <td>78</td>
              <td>23</td>
            </tr>
          </TableBody>
        </Table>
      </div>
    </TwoColumnGrid>
  </Page>
)

export default Groessentabelle
