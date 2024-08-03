function Footer() {
    return (
        <div>
            <h2 className="text-white bg-black p-16">Questions? Call 1-844-505-2993</h2>
            <div className="outer flex w-full h-60 bg-black text-white">
                <div className="fl flex flex-col ml-16">
                    <p>FAQ</p>
                    <p className="py-3">Investor Relations</p>
                    <p>Ways to Watch</p>
                    <p className="py-3">Corporate Information</p>
                    <p>Netflix Originals</p>
                </div>
                <div className="f2 flex flex-col pl-64">
                    <p>Help Center</p>
                    <p className="py-3">Jobs</p>
                    <p>Terms of Use</p>
                    <p className="py-3">Contact Us</p>
                </div>
                <div className="f3 flex flex-col pl-64">
                    <p>Account</p>
                    <p className="py-3">Redeem Gift Cards</p>
                    <p>Privacy</p>
                    <p className="py-3">Speed Test</p>
                </div>
                <div className="f4 flex flex-col pl-64">
                    <p>Media Center</p>
                    <p className="py-3">Buy Gift Cards</p>
                    <p>Cookie Preferences</p>
                    <p className="py-3">Legal Notices</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
