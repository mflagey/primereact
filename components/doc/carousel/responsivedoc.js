import { useState, useEffect } from 'react';
import { Button } from '../../lib/button/Button';
import { Carousel } from '../../lib/carousel/Carousel';
import { ProductService } from '../../../service/ProductService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function ResponsiveDoc(props) {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`${contextPath}/images/product/${product.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} header={<h5>Basic</h5>} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './service/ProductService';

export default function ResponsiveDoc() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={\`images/product/\${product.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">\${product.price}</h6>
                        <span className={\`product-badge status-\${product.inventoryStatus.toLowerCase()}\`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} header={<h5>Basic</h5>} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './service/ProductService';

export default function ResponsiveDoc() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={\`images/product/\${product.image}\`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">\${product.price}</h6>
                        <span className={\`product-badge status-\${product.inventoryStatus.toLowerCase()}\`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} header={<h5>Basic</h5>} />
        </div>
    )
}
        `,
        data: `
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card">
                <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} header={<h5>Basic</h5>} />
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
