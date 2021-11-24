import React from "react";
import ReactDom from "react-dom";
import Header from "./header";
import Calendar from "./calendar";
import "./index.css";
import HostelCard from "./hostelCard";
import { Students, Employee, Equipment } from "./hostelInfo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Data from "./data.json";

function App() {

	return (
		<React.Fragment>
			<BrowserRouter>
				<div style={{ position: "absolute", width: "100%", height: "100%" }}>
					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<>
									<Header />
									<HostelCard />
								</>
							)}
						/>
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/student`}
									render={() => (
										<>
											<Header hostel={item.HostelName} id={item.id} color={item.Color} />
											<Students hostel={item} />
										</>
									)}
								/>
							);
						})}
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/employee`}
									render={() => (
										<>
										<Header hostel={item.HostelName} id={item.id} color={item.Color} />
											<Employee hostel={item} />
										</>
									)}
								/>
							);
						})}
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/equipment`}
									render={() => (
										<>
											<Header hostel={item.HostelName} id={item.id} color={item.Color}/>
											<Equipment hostel={item} />
										</>
									)}
								/>
							);
						})}
					</Switch>
				</div>
				<Calendar />
			</BrowserRouter>
		</React.Fragment>
	);
}

ReactDom.render(<App />, document.getElementById("root"));
