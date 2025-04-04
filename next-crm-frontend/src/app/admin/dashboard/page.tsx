import { getClientsStats } from '@/modules/clients';
import { NewClientsChart } from '../../../modules/clients/components/charts/NewClientsChart';

export default async function DashboardPage() {

    const { data } = await getClientsStats()

    return (

        <div>
            <h1>Hello Page</h1>
            {/* <div id="chart"></div> */}
            <NewClientsChart numberOfClients={data!.numberOfClients} />

        </div>
    );
}