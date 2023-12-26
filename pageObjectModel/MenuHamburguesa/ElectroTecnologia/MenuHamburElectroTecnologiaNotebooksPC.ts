import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaNotebooksPC extends BasePage {

    readonly NOTEBOOKS_PC: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NOTEBOOKS_PC =this.page.locator('//a [@id="menu-item-category-notebook-pc"]')
    }

    async clickElectroTecnologiaNotebooksPC(): Promise<void> {
        await this.click(this.NOTEBOOKS_PC)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaNotebooksPC(): Promise<void> {
        await this.clickElectroTecnologiaNotebooksPC()
    }
}
