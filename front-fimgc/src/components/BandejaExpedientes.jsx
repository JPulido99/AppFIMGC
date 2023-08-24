import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BandejaExpedientes = () => {

  //Esta vista solo la ve el secretario de escuela y el decano 
  /*const [expediente, setExpediente]=useState();
  useEffect(()=>{
      //endpoint
      const URL='elurl/api/'
      axios.get(URL)
          .then(res=>setExpediente(res.data.results[ndiceDondeSeEncuentranLosExpedientes]))
          .catch(err=>console.log(err))
  },[])

  console.log(expediente)*/

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch documents from your API or database
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('your-api-endpoint'); // Replace with your API endpoint
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const openDocument = (documentUrl) => {
    window.open(documentUrl, '_blank');
  };

  return (
    <div>
      <Tabs defaultActiveKey="expedientes-pendientes" className="mb-3">
        <Tab tabClassName='horizontal-nav-link' eventKey="expedientes-pendientes" title="Memorandos">
          <Container>
            <legend className='customize-legend-2 text-uppercase'>Memorandos Múltiples</legend>
            <Table responsive="sm" className='table-container'>
            <thead className='thead-text-customize'>
                <tr>
                  <th>Nº de expediente</th>
                  <th>Nº de memorando</th>
                  <th>Nombre interesado</th>
                  <th>Archivo pdf</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nº de expediente</td>
                  <td>Nº de memorando</td>
                  <td>Nombre interesado</td>
                  <td><Button size="sm" variant="outline-success btn-into-table">Ver <i className="fi fi-bs-eye"></i></Button></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Tab>
        <Tab tabClassName='horizontal-nav-link' eventKey="expedientes-firmados" title="Resoluciones">
          <Container>
            <legend className='customize-legend-2 text-uppercase'>Resoluciones Decanales</legend>
            <Table responsive="sm" className='table-container'>
              <thead className='thead-text-customize'>
                <tr>
                  <th>Nº de expediente</th>
                  <th>Nº de memorando</th>
                  <th>Nombre interesado</th>
                  <th>Archivo pdf</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nº de expediente</td>
                  <td>Nº de memorando</td>
                  <td>Nombre interesado</td>
                  <td><Button size="sm" variant="outline-success btn-into-table">Ver <i className="fi fi-bs-eye"></i></Button></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Tab>
      </Tabs>
    </div>
  )
}

export default BandejaExpedientes