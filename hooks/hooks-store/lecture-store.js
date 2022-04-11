import { initStore } from "./custom-store";
import { cources } from "./lecture";

const configureStore = () => {
    const actions = {
        BOOKMARK : (curState, lectureId) => {
            const lecIndex = curState.lectures.findIndex(l => l.id === lectureId)
            const newFavStatus = !curState.lectures[lecIndex].isFavorite;
            const updatedLectures = [...curState.lectures]
            updatedLectures[lecIndex] = {
                ...curState.lectures[lecIndex],
                isFavorite: newFavStatus
            }
            return {lectures : updatedLectures}
        }
    }

    initStore(actions, {lectures : cources})




}

export default configureStore