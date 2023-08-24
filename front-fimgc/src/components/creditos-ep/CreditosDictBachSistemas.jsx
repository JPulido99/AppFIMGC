import React from 'react'

const CreditosDictBachSistemas = () => {
  return (
    <Table responsive="sm">
      <tbody>
        <tr>
          <td>Estudios específicos y de especialidad</td>
          <td>
            <Form.Select aria-label="Estado de requisito">
              <option>Seleccione</option>
              <option value="CONFORME">CONFORME</option>
              <option value="INCONFORME">INCONFORME</option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td>Prácticas pre-profesionales</td>
          <td>
            <Form.Select aria-label="Estado de requisito">
              <option>Seleccione</option>
              <option value="CONFORME">CONFORME</option>
              <option value="INCONFORME">INCONFORME</option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td>Cursos electivos</td>
          <td>
            <Form.Select aria-label="Estado de requisito">
              <option>Seleccione</option>
              <option value="CONFORME">CONFORME</option>
              <option value="INCONFORME">INCONFORME</option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td>Actividades co-curriculares</td>
          <td>
            <Form.Select aria-label="Estado de requisito">
              <option>Seleccione</option>
              <option value="CONFORME">CONFORME</option>
              <option value="INCONFORME">INCONFORME</option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td>Idiomas</td>
          <td>
            <Form.Select aria-label="Estado de requisito">
              <option>Seleccione</option>
              <option value="CONFORME">CONFORME</option>
              <option value="INCONFORME">INCONFORME</option>
            </Form.Select>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CreditosDictBachSistemas