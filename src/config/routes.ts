import IRoute  from '../interfaces/route';
import App from './../App'
import Results from '../pages/Results';
import List from '../List';
const routes : IRoute[]=[
    {
        path:'/',
        name:'List',
        component: List,
        exact : true
    },
{
    path:'/List',
    name:'HomePage',
    component: List,
    exact : true
},
{
    path:'/results',
    name:'ResultsPage',
    component: Results,
    exact : true
},


]

export default routes;