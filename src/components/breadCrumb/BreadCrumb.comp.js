import Breadcrumb from 'react-bootstrap/Breadcrumb';

function PageBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default PageBreadcrumb;