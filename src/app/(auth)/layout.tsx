import type { Metadata } from "next";
import AuthHeader from "@/components/AuthHeader";

export const metadata: Metadata = {
	title: "SnapTicket - auth",
	description: "Authentication for SnapTicket",
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<div>
				<AuthHeader />
				{children}
			</div>
		</div>
	);
}
