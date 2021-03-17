import logo from './logo.svg';
import './App.css';
import Card from './Card'

const data = [
  {
    id: 1,
    title: "Free",
    price: "0",
    users: "Single User",
    storage: "5 GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    phone_support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    status_report: "Monthly Status Report",
  },
  {
    id: 2,
    title: "Plus",
    price: "9",
    users: "5 Users",
    storage: "50 GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    phone_support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    status_report: "Monthly Status Report",
  },
  {
    id: 3,
    title: "Pro",
    price: "49",
    users: "Unlimited Users",
    storage: "150 GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    phone_support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    status_report: "Monthly Status Report",
  },
];

function App() {
  return (
    <section class="pricing py-5">
      <div class="container">
      <div class="row">
      {data.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <Card
                  title={item.title}
                  price={item.price}
                  users={item.users}
                  storage={item.storage}
                  public_projects={item.public_projects}
                  access={item.access}
                  private_projects={item.private_projects}
                  phone_support={item.phone_support}
                  subdomain={item.subdomain}
                  status_report={item.status_report}
                ></Card>
              </div>
               );
              })}
      </div>
    </div>
    </section>
    
    
  );
}

export default App;
