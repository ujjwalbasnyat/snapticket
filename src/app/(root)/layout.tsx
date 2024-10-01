import Header from "@/components/header";
import Footer from "@/components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<div>
				<section>
					<Header />
					{children}
					<Footer />
				</section>
			</div>
		</main>
	);
};

export default MainLayout;
