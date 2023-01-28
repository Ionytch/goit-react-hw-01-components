import { StatsItem } from "StatsItem";
export const Statistics = ({ stats }) => {
    return (<section class="statistics"> 
  <h2 class="title">Upload stats</h2>
        
        {
                stats.map(item =><StatsItem key={item.id} data={item} />
                )
        }
        
</section>
    )

}


