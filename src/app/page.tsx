import { TopPagePresenter } from "@/components/pages/HomePresenter";
import introduceContent from "../../data/introduce/introduce.json";

export default function Top() {
    return <TopPagePresenter content={introduceContent} />;
}
