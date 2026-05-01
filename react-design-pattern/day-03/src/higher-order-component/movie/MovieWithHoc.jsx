import { withDataFetching } from './hoc/withDataFetching'
import MovieList from './MovieList'
import MovieAnalytics from './MovieAnalytics'

const MovieListWithData = withDataFetching(MovieList);
const MovieAnalyticsWithData = withDataFetching(MovieAnalytics)

export default function MovieWithHoc () {
    return (
        <div>
            <MovieListWithData name="john" />
            <MovieAnalyticsWithData />
        </div>
    )
}