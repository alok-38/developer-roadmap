# HTML Form Challenge

In this lesson, I want you to create a form for an apartment search website. The form should include the following fields:

- A header at the top of the form that says "Apartment Search"
- Location (text input)
- Monthly Price (range or number input)
- Number of Bedrooms (number input)
- Number of Bathrooms (number input)
- Pets Allowed (checkbox)
- Date Available (date input)
- Submit Button

## Other Information

The range will not show the value in the UI, which is fine for this exercise.

Each input should have a corresponding label. The `id` attribute of each input should match the `for` attribute of its corresponding label.

Each input should also have a `name` attribute that corresponds to the data that will be submitted when the form is submitted.

You can use `<br>` tags to separate the form fields since we have not gotten into CSS yet.

If your solution does not look exactly like the example, that's okay. The important thing is that you have all the required fields and that the labels are correctly associated with the inputs.

<details>
  <summary>Click For Solution</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML & CSS Sandbox</title>
  </head>
  <body>
    <header>
      <h1>Apartment Search</h1>
    </header>
    <main>
      <form>
        <div>
          <label for="location">Location</label>
          <input type="text" name="location" id="location" />
        </div>
        <br />

        <div>
          <label for="price">Price</label>
          <input type="range" name="price" id="price" />
        </div>
        <br />

        <div>
          <label for="bedrooms">Bedrooms</label>
          <input type="number" name="bedrooms" id="bedrooms" />
        </div>
        <br />

        <div>
          <label for="bathrooms">Bathrooms</label>
          <input type="number" name="bathrooms" id="bathrooms" />
        </div>
        <br />

        <div>
          <label for="pets">
            Pets
            <input type="checkbox" name="pets" id="pets" />
          </label>
        </div>
        <br />

        <div>
          <label for="date">Date Available</label>
          <input type="date" name="date" id="date" />
        </div>
        <br />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  </body>
</html>

```

</details>
