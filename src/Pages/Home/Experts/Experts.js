
import expert1 from '../../../images/expert-img/expert-1.jpg'
import expert2 from '../../../images/expert-img/expert-2.jpg'
import expert3 from '../../../images/expert-img/expert-3.jpg'
import expert4 from '../../../images/expert-img/expert-4.jpg'
import expert5 from '../../../images/expert-img/expert-5.jpg'
import expert6 from '../../../images/expert-img/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
	{ id: 1, name: "Jon Smith", img: expert1 },
	{ id: 2, name: "Kell Smith", img: expert2 },
	{ id: 3, name: "Jall Smith", img: expert3 },
	{ id: 4, name: "Mall Smith", img: expert4 },
	{ id: 5, name: "Jons Smith", img: expert5 },
	{ id: 6, name: "Jonom Smith", img: expert6 },
]
const Experts = () => {
	return (
		<div className='container'>
			<h1 className='text-primary mt-5'>Our Experts</h1>
			<div className="row">
				{
					experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
				}
			</div>
		</div>
	);
};

export default Experts;