require "application_system_test_case"

class SimplesTest < ApplicationSystemTestCase
  setup do
    @simple = simples(:one)
  end

  test "visiting the index" do
    visit simples_url
    assert_selector "h1", text: "Simples"
  end

  test "creating a Simple" do
    visit simples_url
    click_on "New Simple"

    fill_in "Body", with: @simple.body
    fill_in "Title", with: @simple.title
    click_on "Create Simple"

    assert_text "Simple was successfully created"
    click_on "Back"
  end

  test "updating a Simple" do
    visit simples_url
    click_on "Edit", match: :first

    fill_in "Body", with: @simple.body
    fill_in "Title", with: @simple.title
    click_on "Update Simple"

    assert_text "Simple was successfully updated"
    click_on "Back"
  end

  test "destroying a Simple" do
    visit simples_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Simple was successfully destroyed"
  end
end
