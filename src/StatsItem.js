export const StatsItem = ({data:{label,percentage}}) => {
    return<ul class="stat-list">
            <li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>
           </ul>
    
}