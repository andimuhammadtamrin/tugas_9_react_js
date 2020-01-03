import React,{Component} from 'react';
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Breadcrumb,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  OverlayTrigger,
  Popover,
  Collapse
}from "react-bootstrap";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      buka:true
    };
  }

  render() {
    const informasi = <Popover>
                        <Popover.Title >Informasi Website</Popover.Title>
                        <p align="justify">Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga</p>
                      </Popover>

    return(
      <Container>
        <Navbar bg="dark" variant="dark" sm>
          <Navbar.Brand style={{colo:"white"}} href="/">Akses Sport</Navbar.Brand>
            <Nav>
              <Nav.Item>
                <Nav.Link style={{color:"grey"}} href="/">Berita</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link style={{color:"grey"}} href="/">Live Score</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" style={{color:"grey"}}>
                      Piala & Liga
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Liga 1 Indonesia</Dropdown.Item>
                      <Dropdown.Item>Liga Primer Inggris</Dropdown.Item>
                      <Dropdown.Item>Divisi Primera </Dropdown.Item>
                      <Dropdown.Item>Serie A</Dropdown.Item>
                      <Dropdown.Item>Ligue 1</Dropdown.Item>
                      <Dropdown.Item>Bundes Liga</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

              </Nav.Item>

              <Nav.Item>
                <Nav.Link style={{color:"grey"}} href="/">Transfer Pemain</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{color:"grey"}} href="/">Tim</Nav.Link>
              </Nav.Item>
            </Nav>
            <Col></Col>
            <Form inline>
              <FormControl type="text" placeholder="Silahkan Cari" className="mr-sm-2" />
            </Form>
              <Button variant="outline-info">Search</Button>
        </Navbar>
        <Row>
          <Col xs={6}></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/Liga_Inggris">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href="/Transfer_Pemain">Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col xs={9}><h6><b>Rumor Transfer Pemain</b></h6></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={9}>
            <Tabs defaultActiveKey="info">
              <Tab eventKey="Semua_Transfer" title="Semua Transfer">
                <Table sm>
                 <div>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Pemain</th>
                      <th>Tim</th>
                      <th>Transfer</th>
                      <th>Proses Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>MAROUANE FELLANI</td>
                      <td>MENCHESTER UNITED</td>
                      <td>SHANDONG LUNENG</td>
                      <td>
                        <ProgressBar striped now={85} label={"85%"}/>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>LUIS NANI</td>
                      <td>SPORTING CP</td>
                      <td>ORLANDO CITY</td>
                      <td>
                        <ProgressBar striped now={55} label={"55%"}/>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>MAREK HAMSIK</td>
                      <td>NAPOLI</td>
                      <td>DALIAN YIFANG</td>
                      <td>
                        <ProgressBar striped now={95} label={"95%"}/>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>SARDAR AZMOUN</td>
                      <td>RUBIN KAZAN</td>
                      <td>ZENIT ST PETERSBURG</td>
                      <td>
                        <ProgressBar striped now={100} label={"100%"}/>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>MICHY BATSHUAYI</td>
                      <td>CHELSEA</td>
                      <td>CRYSTAL PALACE</td>
                      <td>
                        <ProgressBar striped now={50} label={"50%"}/>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>LUCAZ PIAZON</td>
                      <td>CHELSEA</td>
                      <td>CHIEVO</td>
                      <td>
                        <ProgressBar striped now={100} label={"100%"}/>
                      </td>
                    </tr>

                  </tbody>
                  </div>
                  <br />

                  <Pagination size="sm">
                    <Pagination.Item> &#060;&#060;  </Pagination.Item>
                    <Pagination.Item>&#060;</Pagination.Item>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>...</Pagination.Item>
                    <Pagination.Item>10</Pagination.Item>
                    <Pagination.Item>11</Pagination.Item>
                    <Pagination.Item>12</Pagination.Item>
                    <Pagination.Item>13</Pagination.Item>
                    <Pagination.Item>14</Pagination.Item>
                    <Pagination.Item>...</Pagination.Item>
                    <Pagination.Item>20</Pagination.Item>
                    <Pagination.Item>&#062;</Pagination.Item>
                    <Pagination.Item>&#062;&#062;</Pagination.Item>
                  </Pagination>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={informasi}>
                    <Button variant="primary">Informasi</Button>
                  </OverlayTrigger>
                  <Button
                    variant="primary"
                    onClick={()=> this.setState({buka: !this.state.buka})}
                  >
                    Versi Website
                  </Button>

                  <Collapse in={!this.state.buka} inline>
                    <h6 style={{paddingLeft:"90px",paddingTop:"10px"}}>Akses Sport V1.0</h6>
                  </Collapse>
                </Table>
              </Tab>
              <Tab eventKey="Liga_Primer_Inggris" title="Liga Inggris"></Tab>
              <Tab eventKey="Serie_A" title=" Serie A"></Tab>
              <Tab eventKey="Divisi_Primera" title="Divisi Primera"></Tab>
              <Tab eventKey="Bundesliga" title="Bundesliga"></Tab>
              <Tab eventKey="Liga_Indonesia" title="Liga 1 Indonesia"></Tab>
            </Tabs>
          </Col>
          <Col></Col>

        </Row>

      </Container>
    );
  }
}


export default App;
