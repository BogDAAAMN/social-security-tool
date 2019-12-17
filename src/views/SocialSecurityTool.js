import React from "react";
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    Input,
    Container,
    Col,
    Row
} from "reactstrap";

// core components
import TransparentFooter from "../components/Footers/TransparentFooter.js";

class SocialSecurityTool extends React.Component {
    constructor() {
        super();

        this.state = {
            countries: [],
            residency: [{
                country: "Netherlands",
                more: ""
            }],
            workplaces: [{
                location: "Netherlands",
                employment: "Civil servant",
                hours: ""
            }]
        };

        // Setup the countries list
        this.state.countries = CountryRegionData.map(country => country[0]);

        // Bring in front nl, be, de and separator. Remove the duplicates
        this.state.countries = [...["Netherlands", "Belgium", "Germany", "---"], ...this.state.countries];
    }

    printtt = () => {
        console.log(this.state.workplaces);
    };

    handleAddWorkplace = () => {
        this.setState({
            workplaces: this.state.workplaces.concat([{
                location: "Netherlands",
                employment: "Civil servant",
                hours: ""
            }])
        });
    };

    handleRemoveWorkplace = idx => () => {
        if (idx > 0)
            this.setState({
                workplaces: this.state.workplaces.filter((s, sidx) => idx !== sidx)
            });
    };

    handleWorkplaceChange = idx => evt => {
        const newWorkplaces = this.state.workplaces.map((workplace, sidx) => {
            if (idx !== sidx) return workplace;

            if (evt.target.name === "hours") return {...workplace, hours: evt.target.value};
            if (evt.target.name === "location") return {...workplace, location: evt.target.value};
            if (evt.target.name === "employment") return {...workplace, employment: evt.target.value};
        });

        this.setState({workplaces: newWorkplaces});
    };

    handleSubmit = e => {
        e.preventDefault();


    };

    render() {
        return (
            <div className="page-header clear-filter" filter-color="blue">
                <div className="content mt-5">
                    <Container>
                        <Col className="ml-auto mr-auto" md="6">
                            <Card className="pl-3 pr-3">
                                <Form onSubmit={this.handleSubmit} className="form" method="">
                                    <CardHeader className="text-center">

                                    </CardHeader>

                                    <CardBody>

                                        {/*RESIDENCY GROUP*/}
                                        <p className="text-black text-uppercase">Residency</p>
                                        <FormGroup
                                            className={
                                                "no-border input-lg"
                                            }
                                        >
                                            <label className="w-100 text-left text-black text-uppercase"
                                                   htmlFor="residency">
                                                Residency Country
                                            </label>
                                            <Input ref="residency" type="select">
                                                {
                                                    this.state.countries.map(country => {
                                                        return country === "---" ?
                                                            <option disabled>{country}</option> :
                                                            <option>{country}</option>
                                                    })
                                                }
                                            </Input>
                                        </FormGroup>
                                        <FormGroup
                                            className={
                                                "no-border input-lg"
                                            }
                                        >
                                            <label className="w-100 text-left text-black text-uppercase"
                                                   htmlFor="more">
                                                Another field
                                            </label>
                                            <Input
                                                ref="more"
                                                placeholder="More information"
                                                type="text"
                                            />
                                        </FormGroup>

                                        {/*WORK GROUP*/}
                                        <p className="text-black text-uppercase mt-5 mb-0">Work place</p>
                                        <Button className="btn-link" color="primary"
                                                onClick={this.handleAddWorkplace}>
                                            <i className="now-ui-icons ui-1_simple-add text-black"/>
                                        </Button>
                                        <Button className="btn-link" color="primary"
                                                onClick={this.handleRemoveWorkplace(this.state.workplaces.length - 1)}>
                                            <i className="now-ui-icons ui-1_simple-delete text-black"/>
                                        </Button>

                                        {this.state.workplaces.map((workplace, idx) => (

                                            <div className="workplace">
                                                <FormGroup className={"no-border input-lg"}>
                                                    <label className="w-100 text-left text-black text-uppercase"
                                                           htmlFor="job-location">
                                                        {`Location #${idx + 1}`}
                                                    </label>
                                                    <Input
                                                        name="location"
                                                        onChange={this.handleWorkplaceChange(idx)}
                                                        type="select"
                                                    >
                                                        {
                                                            this.state.countries.map(country => {
                                                                return country === "---" ?
                                                                    <option disabled>{country}</option> :
                                                                    <option>{country}</option>
                                                            })
                                                        }
                                                    </Input>
                                                </FormGroup>
                                                <FormGroup className={"no-border input-lg"}>

                                                    <Row>
                                                        <div className="col">
                                                            <label
                                                                className="w-100 text-left text-black text-uppercase"
                                                                htmlFor="type">
                                                                Employment
                                                            </label>
                                                            <Input
                                                                name="employment"
                                                                onChange={this.handleWorkplaceChange(idx)}
                                                                type="select"
                                                            >
                                                                <option>Civil servant</option>
                                                                <option>Self-employed</option>
                                                                <option>Employee</option>
                                                            </Input>
                                                        </div>
                                                        <div className="col">
                                                            <label
                                                                className="w-100 text-left text-black text-uppercase"
                                                                htmlFor="more">
                                                                Hours
                                                            </label>
                                                            <Input
                                                                name="hours"
                                                                onChange={this.handleWorkplaceChange(idx)}
                                                                placeholder={`#${idx + 1}`}
                                                                type="number"
                                                            />
                                                        </div>
                                                    </Row>
                                                </FormGroup>
                                            </div>
                                        ))}

                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="info"
                                            type="submit"
                                            onClick={this.printtt}
                                            size="lg"
                                        >
                                            Get Results
                                        </Button>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                {/*<TransparentFooter />*/}
            </div>
        );
    }
}

export default SocialSecurityTool;
