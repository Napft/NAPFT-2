import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";

const MintDiv = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const MintForm = styled.form`
  width: 30%;
  padding: 20px;
  background-color: #1c1f2b;
  color: white;
  border-radius: 10px;
  border: 1px solid blue;
  cursor: pointer;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: gray;
  cursor: pointer;
  opacity: 30%;
  border-radius: 5px;
  &:hover {
    border: 1px solid blue;
    opacity: 100%;
    background: none;
  }
`;

const Input2 = styled.input`
  width: 100%;
  padding: 10px;
  background: gray;
  /* border: 1px solid blue; */
  cursor: not-allowed;
  opacity: 50%;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background: gray;
  cursor: pointer;
  opacity: 30%;
  border-radius: 5px;
  &:hover {
    border: 1px solid blue;
    opacity: 100%;
    background: none;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  background: none;
  border: 1px solid #176cebed;
  /* border-radius: 5px 25px; */
  border-radius: 25px;
  color: white;
  padding: 5px 25px;
`;
const Paragraph = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 40px 0 0;
`;

const Mint = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <MintDiv data-aos="zoom">
      <Paragraph>
        Mint your{" "}
        <strong style={{ color: "blue", fontSize: "2.5rem" }}>NFT</strong>
      </Paragraph>
      <MintForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" name="title" required />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" rows="4" required />
        </FormField>
        <FormField>
          <Label htmlFor="file">Upload File</Label>
          <Input
            type="file"
            id="file"
            name="file"
            accept="image/*, video/*"
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="price">Price</Label>
          <Input type="number" id="price" name="price" required />
        </FormField>
        <FormField>
          <Label htmlFor="chain">Chain</Label>
          <Input2
            type="text"
            id="chain"
            name="price"
            readOnly
            Value="Polygon"
            required
          />
        </FormField>
        <Button type="submit">Mint NFT</Button>
      </MintForm>
    </MintDiv>
  );
};

export default Mint;
