import { TopPagePresenter } from "@/components/pages/HomePresenter";
import introduceContent from "../../data/self-introduce/data.json";

export default function Top() {
    return <TopPagePresenter content={introduceContent} />;
}
