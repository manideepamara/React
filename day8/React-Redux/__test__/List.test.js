const { shallow } = require("enzyme")
const {default:React} = require('react')
const { default: List } = require("../components/List")



describe('testing list .js', () => {
    it('renders list-item',()=>{
        const items=['one','two','three']
        const wrapper = shallow(<List items={items} />);
        expect(wrapper.find('list-item')).toBeDefined();
        
    })
})
