import Breadcrumb from 'react-bootstrap/Breadcrumb';

function PageBreadcrumb({page}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default PageBreadcrumb;