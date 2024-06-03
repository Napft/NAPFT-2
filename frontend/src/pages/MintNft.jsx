import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useState } from "react";
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";
import axios from "axios";

const MintDiv = styled.div`
  width: 100%;
  padding: 5rem 0;
  /* height: 160vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const MintForm = styled.form`
  width: 50%;
  padding: 20px;
  background-color: #1c1f2b;
  color: white;
  border-radius: 10px;
  border: 1px solid #444546;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
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

const MintNft = () => {
  const { mintNFT2 } = useNFTMarketplace();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1500 });
  }, []);

  //state management
  const [file, setFile] = useState(""); // State to store the uploaded file
  const [preview, setPreview] = useState(); // State to store the preview image URL
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [royalityfee, setRoyalityfee] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append("file", file);
      const metadata = JSON.stringify({
        name: title, // "file name"
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      console.log(resData);
      // // Minting the NFT
      const mintedNFT = await mintNFT2({
        IpfsHash: resData.IpfsHash,
        price: price,
        royalityfee: royalityfee,
        title: title,
        description: description,
      });
      console.log("Minted NFT:", mintedNFT);

      //   const formData = new FormData();
      //   console.log("formData")
      //   formData.append('file', event.target.file.files[0]);
      //   console.log("formData", formData)
      //   // Uploading the file to IPFS
      //   const response = await axios.post('https://ipfs.infura.io:5001/api/v0/add', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   });

      //   const { path } = response.data;
      //   setIpfsHash(path);
      //   console.log('IPFS Hash:', path);
      // // Minting the NFT
      // const mintedNFT = await mintNFT2({
      //   price: price,
      //   IpfsHash: path,
      //   title: title,
      //   description: description
      // });
      // console.log('Minted NFT:', mintedNFT);

      setFile("");
      setPreview("");
      setTitle("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error minting NFT:", error);
      alert("Error minting NFT");
    }
  };

    // const handleCheck = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const new_nft = {
  //       IPFS_hash: "asdfsdft",
  //       NFT_token_ID: 1232343244,
  //       title: "asdasg",
  //       price: 5003,
  //       description: "asdadad",
  //       creator_metamask_ID: "sdasdadf",
  //       owner_metamask_ID: "asdadafsd",
  //     };

  //     console.log("New NFT:", new_nft);
  //     const online_url = "http://localhost:8800/api/v1/nft/new_nft";
  //     axios
  //       .post(online_url, new_nft)
  //       .then((response) => {
  //         console.log("Success", response);
  //       })
  //       .catch((error) => {
  //         console.error("Error", error);
  //       });

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Handle file change event
  function handleChange(e) {
    const selectedFile = e.target.files[0]; // Get the first file from the input

    // If a file is selected
    if (selectedFile) {
      // Set the file state
      setFile(selectedFile);

      // Create a file reader
      const reader = new FileReader();

      // Define a callback function to be executed when the reader loads the file
      reader.onloadend = () => {
        // Set the preview state to the URL of the loaded file
        setPreview(reader.result);
        console.log(setPreview);
      };

      // Read the file as a data URL (base64 encoded string)
      reader.readAsDataURL(selectedFile);
    }
  }

  return (
    <MintDiv data-aos="zoom">
      <Paragraph>
        Mint your{" "}
        <strong style={{ color: "blue", fontSize: "2.5rem" }}>NFT</strong>
      </Paragraph>
      <MintForm onSubmit={handleSubmit}>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          />
        )}
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="file">Upload File</Label>
          <Input
            type="file"
            id="file"
            name="file"
            accept="image/*, video/*"
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="royalityfee">Royalty Fee(%)</Label>
          <Input
            type="number"
            id="royalityfee"
            name="royalityfee"
            value={royalityfee}
            onChange={(e) => setRoyalityfee(e.target.value)}
            required
          />
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

export default MintNft;